import Image from "next/image";
import profilPic from "@/assets/images/IMG_2451.webp";
import  {getI18n} from "@/app/locales/server";

export default async function About() {

    const t = await getI18n();

    return (
        <section className="px-4 py-8">
            <h1 className="text-center text-3xl sm:text-4xl font-bold mb-6" id="about">{t("AboutMe")}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-xl sm:text-2xl text-center mb-2">{t('Welcome')}</h2>
                    <p className="text-2xl sm:text-3xl text-center font-light mb-4">{t('imAmFullstackDeveloper')}</p>
                    <p className="text-base sm:text-lg text-justify leading-relaxed max-w-md mx-auto">{t('description')}</p>
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
