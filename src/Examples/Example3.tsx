
export const Example3 = () => {
    return(
        <>
            <h1>Auto-layout columns</h1>
            <div className="container text-center bg-[#e6e2eb]">
                <div className="row">
                    <div className="col border border-black">
                        1 of 2
                    </div>
                    <div className="col border border-black">
                        2 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col border border-black">
                        1 of 3
                    </div>
                    <div className="col border border-black">
                        2 of 3
                    </div>
                    <div className="col border border-black">
                        3 of 3
                    </div>
                </div>
            </div>
        </>
    )
}