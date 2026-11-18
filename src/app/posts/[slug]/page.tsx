import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Link from "next/link";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import PostUtilityBar from "@/app/_components/post-utility-bar";
import AdSlot from "@/app/_components/ad-slot";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const postUrl = `${SITE_URL}/posts/${post.slug}`;
  const rawImage = post.ogImage?.url || post.coverImage;
  const fullImageUrl = rawImage?.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [fullImageUrl],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: [
      {
        "@type": "Person",
        name: post.author?.name || SITE_NAME,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BrieflyQ",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dockets & Regulatory Filings",
        item: `${SITE_URL}/#dossiers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <main className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Alert preview={post.preview} />
      <Container>
        <div className="mb-6">
          <Link
            href="/"
            className="text-[#D4AF37] hover:text-[#FAF7F2] text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1.5 transition"
          >
            &larr; Return to Live Dossier
          </Link>
        </div>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostUtilityBar
            title={post.title}
            slug={post.slug}
            date={post.date}
            authorName={post.author?.name}
          />
          <PostBody content={content} />
          <AdSlot slotType="in-article" />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${SITE_NAME}`;
  const postUrl = `${SITE_URL}/posts/${post.slug}`;
  const rawImage = post.ogImage?.url || post.coverImage;
  const fullImageUrl = rawImage?.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      title,
      description: post.excerpt,
      url: postUrl,
      publishedTime: post.date,
      authors: [post.author?.name || SITE_NAME],
      images: [
        {
          url: fullImageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [fullImageUrl],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
