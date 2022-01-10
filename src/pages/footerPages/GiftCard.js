import ItemTable from "../../components/ItemTable";
import {GiftCard_datas} from "../../db/GiftCard_datas";

function GiftCard({addToCart}) {

    return (
        <main>
            <h2 className="text-center pb-2 animate__animated animate__heartBeat">GiftCard</h2>
            <ItemTable addToCart={addToCart} items={GiftCard_datas}></ItemTable>
        </main>
    );
}

export default GiftCard;