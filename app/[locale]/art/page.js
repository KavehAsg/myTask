// components 
import AlbumCard from "@/components/art/AlbumCard";
import { getAlbums } from "@/services/getAlbums"
import { Button } from "@heroui/button";

export default async function page() {
    const data = await getAlbums();

    return (
        <div className="py-8 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Art works - Albums</h1>
                <Button>Create new</Button>
            </div>

            <div className="flex flex-wrap gap-8 items-start justify-center mt-8">
                {data.map((album) => <AlbumCard key={album.id} album={album} />)}
            </div>
        </div>
    )
}
