"use client"

import {PropsWithChildren} from "react";
import {I18nProviderClient} from "@/app/locales/client";

export const Providers = (props:PropsWithChildren<{local:string}>) => {
    return (
        <I18nProviderClient locale={props.local}>
            {props.children}
        </I18nProviderClient>
    )
}