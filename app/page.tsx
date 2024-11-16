import ContactForm from "@/components/ContactForm";
import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiFlag, FiMail } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="space-y-7">
      <Container className="">
        <Image
          src="https://dummyimage.com/500x500"
          alt="hero-image"
          width={500}
          height={500}
          className="rounded-xl w-full object-cover h-[400px]"
        />
      </Container>
      <Container className="space-y-3">
        <h3 className="font-bold text-[3rem] text-purple-500">
          WHAT IS PHENOM?
        </h3>
        <Card>
          <div className="space-y-3">
            <p>
              <span className="text-purple-500">PHENOM</span> is a diverse,
              inclusive, and globally integrated system designed to connect you
              with limitless access to extensive financial opportunities and
              aesthetics. Its mission is to create and foster a wide range of
              ambitions and aspirations for users worldwide. Here we offer you
              the opportunity to mine cryptocurrencies directly from your mobile
              phone and access cutting-edge digital courses.
            </p>
            <p>
              Our platform enables you to monetize your social media accounts
              for passive income, while our advanced earning models provide
              daily rewards, enhancing your financial potential, Join us as your
              home and pathway to financial freedom, where we empower you to
              embrace a life of abundance and opportunity.
            </p>
          </div>
        </Card>
      </Container>
      <Container className="flex flex-col gap-6 justify-center">
        <Image
          src="https://dummyimage.com/500x500"
          alt="hero-image"
          width={500}
          height={500}
          className="rounded-xl w-full object-cover h-[400px]"
        />
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FiClock /> Join Waitlist
        </Card>
        <Card className="space-y-4">
          <h3 className="font-bold text-[3rem] text-purple-500">
            Register Now!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            temporibus est atque, obcaecati voluptatem impedit molestiae
            exercitationem, a error ullam, repudiandae aliquam corporis
            asperiores tenetur veritatis harum dolorem? Natus, nostrum
            accusamus. Magnam quos blanditiis natus.
          </p>
          <Link
            href="#"
            className="bg-white rounded-lg text-slate-950 px-3 py-2 inline-flex justify-center items-center gap-2"
          >
            Click here to Register
            <FiArrowRight />
          </Link>
        </Card>
      </Container>
      <Container className="flex flex-col gap-6 justify-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FiFlag /> We Are Multinational
        </Card>
        <Image
          src="https://dummyimage.com/500x500"
          alt="hero-image"
          width={500}
          height={500}
          className="rounded-xl w-full object-cover h-[400px]"
        />
      </Container>
      <Container className="flex flex-col gap-6 justify-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FiMail /> Contact Us
        </Card>
        <Card>
          <ContactForm />
        </Card>
      </Container>
    </main>
  );
}
