import ImageContainer from "./ImageContainer";

// Function to calculate number of photos in each row based on the golden ratio
const calculateRows = (photos) => {
    let rows = [];
    let remainingPhotos = photos.length;
    let rowCount = 1;

    // Keep calculating the rows based on the golden ratio
    while (remainingPhotos > 0) {
        const rowSize = Math.round(rowCount);
        const row = photos.slice(0, rowSize);
        rows.push(row);
        photos = photos.slice(rowSize);
        remainingPhotos = photos.length;
        rowCount *= 1.618; // Golden ratio
    }

    return rows;
};

// Generate 100 placeholder photos
const generatePhotos = (num) => {
    const photos = [];
    for (let i = 1; i <= num; i++) {
        photos.push({
            src: `https://via.placeholder.com/300?text=Photo+${i}`,
            alt: `Scenery ${i}`,
            caption: `Scenery ${i}`,
        });
    }
    return photos;
};

const PhotoTree = () => {
    const photos = generatePhotos(100); // Generate 100 photos

    // Calculate the rows based on the golden ratio
    const rows = calculateRows(photos);

    return (
        <div className="photo-tree overflow-hidden">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="photo-row">
                    {row.map((photo, index) => (
                        <ImageContainer
                            key={index}
                            src={photo.src}
                            alt={photo.alt}
                            caption={photo.caption}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PhotoTree;
