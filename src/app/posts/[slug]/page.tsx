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
  const imageUrl = post.ogImage?.url || post.coverImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
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

  return (
    <main className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <PostBody content={content} />
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
  const imageUrl = post.ogImage?.url || post.coverImage;

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
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
