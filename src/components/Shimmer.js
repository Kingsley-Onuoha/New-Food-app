import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";



const Shimmer =()=>{
  
    return(
        <div className="shimmer">
             <ShimmerText line={2} gap={10} />;
            <ShimmerSimpleGallery card imageHeight={200} imageWidth={100} caption />
        </div>
    )
}    
    export default Shimmer