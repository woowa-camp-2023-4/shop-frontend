import {BorderedSquareButton} from "@components/buttons";

export const MainPromotion = () => {
    return (
        <div style={{
            paddingTop: 50,
            paddingBottom: 50,
            backgroundColor: "darkolivegreen",
            width: "100vw",
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{width: 1024, display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <div>
                    <h2 style={{margin: 0, fontWeight: 400, fontSize: 50, color: "white"}}>
                        든든한 개발을 책임지는
                    </h2>
                    <h2 style={{color: "white", fontSize: 50, margin: 0}}>
                        든든한 강원도 왕감자
                    </h2>
                    <div style={{color: "white", fontSize: 20, marginTop: 20, fontWeight: 400}}>
                        <p style={{margin: 0}}>
                            부담없는 가격 4990원
                        </p>
                        <p style={{margin: 0, marginTop: 6}}>
                            최저가 도전 바로가기
                        </p>
                    </div>

                    <BorderedSquareButton/>
                </div>
                <img src={"assets/images/potato.png"} style={{height: 200}} alt={"promotion product"}/>
            </div>
        </div>
    );
};