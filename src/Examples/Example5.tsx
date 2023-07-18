
export const Example5 = () => {
    return(
        <>
            <h1>Setting one column width</h1>
            <div className="container bg-[#e6e2eb]">
                <div className="row">
                    <div className="col border border-black">
                        1 of 3
                    </div>
                    <div className="col-6 border border-black">
                        2 of 3 (wider)
                    </div>
                    <div className="col border border-black">
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col border border-black">
                        1 of 3
                    </div>
                    <div className="col-5 border border-black">
                        2 of 3 (wider)
                    </div>
                    <div className="col border border-black">
                        3 of 3
                    </div>
                </div>
            </div>
        </>
    )
}