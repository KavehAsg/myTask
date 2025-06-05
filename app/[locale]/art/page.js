// components 
import AlbumCard from "@/components/art/AlbumCard";
import { getAlbums } from "@/services/getAlbums"
import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

export default async function page() {
    const data = await getAlbums();

    const t = await getTranslations("art");

    return (
        <div className="py-8 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{t("title")}</h1>
                <Button>{t("create")}</Button>
            </div>

            <div className="flex flex-wrap gap-8 items-start justify-center mt-8">
                {data.map((album) => <AlbumCard key={album.id} album={album} />)}
            </div>
        </div>
    )
}
