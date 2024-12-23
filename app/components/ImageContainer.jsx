import Image from "next/image";

const ImageContainer = ({ src, alt, caption }) => {
    return (
        <div className="flex flex-col items-center bg-white border-2 border-gray-300 shadow-lg p-2 rounded-md">
            {/* Image */}
            <div className="relative w-12 h-12 mb-4">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="rounded-sm"
                />
            </div>
            {/* Caption */}
            {caption && <p className="text-sm text-gray-700">{caption}</p>}
        </div>
    )
}

export default ImageContainer;