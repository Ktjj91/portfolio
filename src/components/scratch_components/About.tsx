import Image from "next/image";
import profilPic from "@/assets/images/IMG_2451.webp";

export default function About() {
    return (
        <section className="px-4 py-8">
            <h1 className="text-center text-3xl sm:text-4xl font-bold mb-6" id="about">About Me</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-xl sm:text-2xl text-center mb-2">Welcome!</h2>
                    <p className="text-2xl sm:text-3xl text-center font-light mb-4">I Am a Fullstack Web Developer</p>
                    <p className="text-base sm:text-lg text-justify leading-relaxed max-w-md mx-auto">
                        I am Kingsley Thomas, a passionate full-stack developer with extensive experience in building
                        modern web applications. My skills cover a full range of front-end and back-end technologies,
                        allowing me to create robust and high-performing solutions.
                        I have strong expertise in popular frameworks such as Angular for the front end and Symfony
                        for the back end, and I also excel in Next.js for full-stack applications. I’ve worked on
                        various projects, including product catalogs with shopping carts, event management systems, and
                        internal management tools. My work frequently involves advanced features such as image handling,
                        JWT authentication, and interactions with third-party services like Stripe for payment
                        management.
                        Beyond my technical skills, I place great importance on code quality, maintainability, and
                        application performance. I also enjoy challenging myself to learn new tools and frameworks,
                        which recently led me to integrate modern development practices with technologies like Prisma
                        and Auth.js.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-self-center p-3">
                    <Image
                        width={300} height={300}
                        className="rounded-full"
                        src={profilPic} alt="Picture of author"
                    />
                </div>
            </div>
        </section>
    );
}
