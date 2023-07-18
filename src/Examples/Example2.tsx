
export const Example2 = () => {
    return(
        <>
            <h1>Example 2</h1>
            <div className="container bg-[#e6e2eb]">
                <div className="row">
                    <div className="sm:col-12 md:col-8">
                        <table className="table-auto w-full">
                            <thead>
                            <tr>
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Age</th>
                                <th className="border px-4 py-2">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">John Doe</td>
                                <td className="border px-4 py-2">30</td>
                                <td className="border px-4 py-2">john@example.com</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Jane Doe</td>
                                <td className="border px-4 py-2">25</td>
                                <td className="border px-4 py-2">jane@example.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="md:col-4 hidden sm:block">
                        <div className="p-4 bg-blue-300">Sidebar content here</div>
                    </div>
                </div>
            </div>
        </>

    )
}