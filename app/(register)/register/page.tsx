import Container from "@/components/elements/Container";
import RegisterForm from "@/components/register/RegisterForm";

export const metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <Container width="2xl">
      <RegisterForm />
    </Container>
  );
}
