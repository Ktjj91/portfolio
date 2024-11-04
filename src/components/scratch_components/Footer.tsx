import {getI18n} from "@/app/locales/server";

export default async function Footer() {
    const t = await getI18n()
    return (
        <footer className=" flex justify-center bg-green-600 h-16 text-white  items-center ">
            <p >{t('copyright')}</p>
        </footer>
    )
}
