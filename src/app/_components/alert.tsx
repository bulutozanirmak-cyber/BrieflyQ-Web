import Container from "@/app/_components/container";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (!preview) return null;

  return (
    <div className="border-b bg-[#141824] border-[#D4AF37] text-white py-2 text-center text-xs">
      <Container>
        <span>
          Executive Preview Mode Active.{" "}
          <a href="/api/exit-preview" className="underline text-[#D4AF37]">
            Exit Preview
          </a>
        </span>
      </Container>
    </div>
  );
};

export default Alert;
