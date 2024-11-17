import ContactForm from "@/components/ContactForm";
import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAfrica } from "react-icons/fa6";
import { FiArrowRight, FiClock, FiMail } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";

export default function HomePage() {
  return (
    <main className="space-y-16">
      <Container className="">
        <Card className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
          <Image
            src="/hero-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-xl object-cover w flex-1"
          />
          <div className="space-y-3 flex-1 ">
            <h3 className="font-bold text-[2.5rem] text-purple-500">
              WHAT IS PHENOM?
            </h3>
            <div className="space-y-3">
              <p>
                <span className="text-purple-500">PHENOM</span> is a diverse,
                inclusive, and globally integrated system designed to connect
                you with limitless access to extensive financial opportunities
                and aesthetics. Its mission is to create and foster a wide range
                of ambitions and aspirations for users worldwide. Here we offer
                you the opportunity to mine cryptocurrencies directly from your
                mobile phone and access cutting-edge digital courses.
              </p>
              <p>
                Our platform enables you to monetize your social media accounts
                for passive income, while our advanced earning models provide
                daily rewards, enhancing your financial potential, Join us as
                your home and pathway to financial freedom, where we empower you
                to embrace a life of abundance and opportunity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/2347076159894?text=Hello I am interested in getting a coupon code for Phenom"
                  className="bg-transparent border border-purple-500 rounded-xl text-purple-500 px-3 py-2 inline-flex justify-center items-center gap-2 flex-1 transition-colors hover:bg-purple-500 hover:text-white"
                >
                  Get Coupon
                  <RiCoupon3Line />
                </Link>

                <RegisterModal showButton />
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="flex flex-col gap-6 justify-center items-center">
        <Card className="inline-flex items-center gap-3 mx-auto px-4 py-2">
          <FaEarthAfrica /> We Are Multinational
        </Card>
        <Image
          src="/country-image.jpg"
          alt="we are multinational image"
          width={500}
          height={500}
          className="rounded-xl  object-cover "
        />
      </Container>

      <Container className="space-y-5">
        <Card className="flex items-center gap-3 mx-auto px-4 py-2 w-max">
          <FiClock /> Join Waitlist
        </Card>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-stretch justify-center ">
          <Card className="space-y-4 order-2 lg:order-1">
            <h3 className="font-bold text-[2.5rem] text-purple-500">
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
              className="bg-white rounded-xl text-slate-950 px-3 py-2 inline-flex justify-center items-center gap-2"
            >
              Click here to Register
              <FiArrowRight />
            </Link>
          </Card>
          <Image
            src="/promo-image.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="rounded-3xl order-1 lg:order-2 object-contain flex-1"
          />
        </div>
      </Container>

      <Container className="flex flex-col gap-6 justify-center" width="3xl">
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
