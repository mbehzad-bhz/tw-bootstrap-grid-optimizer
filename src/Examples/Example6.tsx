
export const Example6 = () => {
    return(
        <>
            <h1>Setting one column width</h1>
            <div className="container bg-[#e6e2eb]">
                <div className="row justify-center">
                    <div className="col md:col-2 border border-black">
                        1 of 3
                    </div>
                    <div className="md:col-auto border border-black">
                        Variable width content
                    </div>
                    <div className="col md:col-2 border border-black">
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col border border-black">
                        1 of 3
                    </div>
                    <div className="md:col-auto border border-black">
                        Variable width content
                    </div>
                    <div className="col lg:col-2 border border-black">
                        3 of 3
                    </div>
                </div>
            </div>
        </>
    )
}