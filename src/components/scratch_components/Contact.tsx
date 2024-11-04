import {FaLinkedin} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {getI18n} from "@/app/locales/server";


export default  async function Contact() {

    const t = await getI18n();

    const stylesHoverLink = "text-4xl cursor-pointer transition-transform duration-300 transform hover:scale-110 "
    return (
        <section className="mt-3">
            <h2 className="text-center text-4xl" id="contact">{t('ContactUs')}</h2>
            <div className=" p-3  space-x-3 mt-3 flex md:flex-row rounded-md border border-green-600 items-center justify-center flex-wrap">
                <a href="https://www.linkedin.com/in/kingsley-thomas-34ab78198/">
                    <FaLinkedin  className={stylesHoverLink}/>
                </a>
                <a href="https://www.instagram.com/kingsley.dr/">
                    <FaInstagramSquare className={stylesHoverLink} />
                </a>
                <a className={stylesHoverLink} href="https://github.com/Ktjj91">
                    <FaGithub/>
                </a>
                <p> <a className="underline hover:text-blue-500" href="mailto:kingsley.dev@gmail.com">kingsley.dev@gmail.com</a></p>
            </div>
        </section>
    )
}
