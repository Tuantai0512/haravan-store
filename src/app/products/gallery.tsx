'use client'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export interface IGalleryProps {
    galery: IGalery[]
}

export default function Gallery(props: IGalleryProps) {

    const galery = props.galery.sort((photoA, photoB) => {
        if (photoA.avatar === photoB.avatar) {
            return 0;
        }
        return photoA.avatar ? -1 : 1;
    })
    
    const newGalery = galery.map((item) => {
        return {
            original: item.url,
            thumbnail: item.url,
        }
    })

    return (
        <ImageGallery items={newGalery} thumbnailPosition="left" showPlayButton={false} showBullets={true}/>
    );
}
