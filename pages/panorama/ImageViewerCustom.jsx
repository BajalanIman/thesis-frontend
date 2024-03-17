import React, { useState, useCallback } from "react";

// import { render } from "react-dom";
// import ImageViewer from "react-simple-image-viewer";
import { useImageViewer } from "react-image-viewer-hook";

const ImageViewerCustom = () => {
  const { getOnClick, ImageViewer } = useImageViewer();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOCzKi3QPYS8BLszovXNBviKE0jGc-6GG8-AlL7qV7nFqDPCKJcr0vd6BXQv1MDhQaZB0uY8ayaTy90YrBzJIbdmKnyAo1pJJh7sKatEfynAZlEUhij4byAwY7IsVPwVeg4WkzD7y3E27mWlZTpK8jG=w1545-h869-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMrVuGmzgrZIYmcgiZBWRrwJbEB-otBO7OYdEsJ79CpUiYP23HoOmgIexdLq8BWk1fSeIjOvU95DC7wwHbe9NVeAQYLiKGwj6DJrSXMQMCbAivdhb46HlOLap_ee1V119yfPRSUryl73MOpjNMymNJm=w1545-h869-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPI0b27AeetkyiUyK-AQN9iikWV5yfWMw4Ib3C_gICKaqWgY3rZO1XwZHjlgW8NyJYBkswmp61Fdk3VIwc10sLM7bcZiNGhHF2FqR5YFxtXxcrqisYAwQe-L2jgcMcvJoSx3BaMww-eSdJWDviSVDBs=w1159-h869-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPrRWbGGqUqqFx5N_oeyBC-pdDCqREiPhQWTV6SKk3wu12ACe2gIo5TwaeP4Sjwiz_OEZIVjRb-e0YGmfnn_c7RtQs_Pu85LpGKBcotXdgY2_JKo7MaCUr45Lerb0Xqr70TBsqDL-0bajtVQ9FRnsRb=w1159-h869-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPCbQrppFGiPspXkuc2wobSYLcGnHnljo3DfrYds7Thm4LE1_QUrrey-1xVwnXNOgWrfoGKu7Dl8E0xtySk7nnRVyKVi3qq80L9tEsgc2mUyNtwjy_OGBFPfr1yrQCDU5MzaKqr75qoAZLEVxvB32yc=w1159-h869-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNJUN7s8y1ZqjIJkvQNavajMb1B5QwEbRMFgrBM8oo6pMV1DZW71z1Tt10uNETdNxz9zcBqWjGFUKRdS24eO-sZ8zv2yRNXPbaTGKsdy5q_0Oh9T3eM0-ylLBhF1reE4U0WVf8-5xqQoPigkvsKBC-0=w1545-h869-s-no-gm?authuser=0",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="flex w-[1450px] flex-wrap justify-center gap-1">
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              margin: "2px",
              flex: "0 0 auto",
              maxWidth: "450px",
              cursor: "pointer",
            }}
          >
            <a
              key={src}
              href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
              onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
            >
              <img
                src={`${src}?auto=compress&cs=tinysrgb&w=400`}
                style={{
                  width: "450px",
                  height: "300px",
                  cursor: "pointer",
                  gap: 2,
                }}
                className="hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>

      <ImageViewer />
    </>
    // <div className="flex w-[1450px] flex-wrap justify-center">
    //   {images.map((src, index) => (
    //     <div
    //       key={index}
    //       style={{ margin: "2px", flex: "0 0 auto", maxWidth: "500px" }}
    //     >
    //       <img
    //         src={src}
    //         onClick={() => openImageViewer(index)}
    //         style={{ width: "450px", height: "300px", cursor: "pointer" }}
    //         alt=""
    //       />
    //     </div>
    //   ))}

    //   {isViewerOpen && (
    //     <ImageViewer
    //       src={images}
    //       currentIndex={currentImage}
    //       disableScroll={false}
    //       closeOnClickOutside={true}
    //       onClose={closeImageViewer}
    //     />
    //   )}
    // </div>
  );
};

export default ImageViewerCustom;
