import type { NextPage } from "next";
import Container from "@/components/Container";
import Form from "@/components/Form";

const greeting = "Let's Talk!";
const Contact: NextPage = () => {
  return (
    <Container title="Inquiry - Melvin Liu">
      <div className="flex flex-col md:flex-row">
        <div className="text-primaryBlack dark:text-white w-full md:max-w-[170px] mb-6 md:mb-0">
          <h1 className="font-semibold text-4xl md:text-6xl">{greeting}</h1>
        </div>
        <Form />
      </div>
    </Container>
  );
};

export default Contact;
