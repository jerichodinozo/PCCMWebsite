import ModalImage from "react-modal-image";
import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import ".././styles/Gallery.css";
import pic1 from ".././assets/featuredevent1.jpg";
import MyModalImage from "../components/MyModalImage";
const items = ["https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/447740208_122151273752124925_5130313869743630050_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SYhP2ObTky8Q7kNvgFCTu6z&_nc_ht=scontent.fyyc2-1.fna&oh=00_AYCAhPOMmm5aoCqvfOcZRNRcYqYdgjRoYRH9jaVgEsFEtg&oe=66948123",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/447740208_122151273752124925_5130313869743630050_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SYhP2ObTky8Q7kNvgFCTu6z&_nc_ht=scontent.fyyc2-1.fna&oh=00_AYCAhPOMmm5aoCqvfOcZRNRcYqYdgjRoYRH9jaVgEsFEtg&oe=66948123",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/447740208_122151273752124925_5130313869743630050_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SYhP2ObTky8Q7kNvgFCTu6z&_nc_ht=scontent.fyyc2-1.fna&oh=00_AYCAhPOMmm5aoCqvfOcZRNRcYqYdgjRoYRH9jaVgEsFEtg&oe=66948123",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/447740208_122151273752124925_5130313869743630050_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SYhP2ObTky8Q7kNvgFCTu6z&_nc_ht=scontent.fyyc2-1.fna&oh=00_AYCAhPOMmm5aoCqvfOcZRNRcYqYdgjRoYRH9jaVgEsFEtg&oe=66948123",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/447740208_122151273752124925_5130313869743630050_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SYhP2ObTky8Q7kNvgFCTu6z&_nc_ht=scontent.fyyc2-1.fna&oh=00_AYCAhPOMmm5aoCqvfOcZRNRcYqYdgjRoYRH9jaVgEsFEtg&oe=66948123",
    pic1];
function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <MyModalImage item={item}/>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div class="gallery-page-section">
            <div class="test">
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate className="paginate"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

function Gallery() {
    return (
        <div class="gallery-page">
            <div class="container">
                <div class="gallery-banner-container">
                    <div class="gallery-banner">
                        <h1>Gallery</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <PaginatedItems className="test" itemsPerPage={6} />
            </div>
            
        </div>
    );
}

export default Gallery;