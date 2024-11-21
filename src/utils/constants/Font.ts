import { DM_Sans, Lato, Noto_Sans_TC, Inter } from "next/font/google"

const lato = Lato({
    weight: ['400'],
    subsets: ['latin'],
})

const dm_sans = DM_Sans({
    subsets: ['latin'],
})

const noto_sans_tc = Noto_Sans_TC({
    subsets: ['latin'],
})

const inter = Inter({
    subsets: ['latin'],
})

export const fonts = { lato, dm_sans, noto_sans_tc, inter }