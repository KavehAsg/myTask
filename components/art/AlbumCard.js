import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image"

export default function AlbumCard({ album }) {
    const { id, alt, src } = album;
    return (
        <Card className="py-4 w-60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-default-500">{id}</small>
                <h4 className="font-bold text-large">{alt}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={src.original}
                    width={270}
                />
            </CardBody>
        </Card>
    );
}
