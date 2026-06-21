import { BoardSale } from "../shared/components/sale/BoardSale"
import { Container } from "../shared/components/sale/Container"
import { MenuSale } from "../shared/components/sale/MenuSale"
import { NameWorker } from "../shared/components/sale/NameWorker"
import { Title } from "../shared/components/sale/Title"





export const Sale = () => {
    return (
        <div className="bg-cyan-950 w-full min-h-screen" >
            <div className="flex flex-row items-center justify-between w-full max-w-[80rem] p-[1rem]">
                <Title />
                <NameWorker />
            </div>
            <div className="flex">
                <Container>
                    <BoardSale />
                </Container>
                <Container>
                    <MenuSale/>
                </Container>
            </div>


        </div>
    )
}
