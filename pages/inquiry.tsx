import type { NextPage } from "next";
import Container from "../components/Container";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";

const Inquiry: NextPage = () => {
  return (
    <Container title="Inquiry - Melvin Liu">
      <div className="flex flex-col-reverse md:flex-row">
        <Sidebar />
        <Form />
      </div>
    </Container>
  );
};
