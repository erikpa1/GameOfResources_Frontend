import PrimitiveMesh from "../../Turtle/Fibers/PrimitiveMesh";

import WEFiberWrapper, {EntityFiberProps} from "./WEFiberWrapper";
import ModelsGallery from "../Data/ModelsGallery";


export default function CartFiber({entity}: EntityFiberProps) {
    return (
        <WEFiberWrapper entity={entity}>

            <PrimitiveMesh
                path={ModelsGallery.CART}
            />

        </WEFiberWrapper>
    )
}