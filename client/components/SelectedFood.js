import React from "react"

const SelectedFood = ({ selectedCat }) => {
    return (
        <>
            <div>
                <img src={selectedCat.picUrl} className='centerImg' />
            </div>
            <div class='container'>
                <div class='column'>
                    <table>
                        <tbody>
                            <tr class='gray'>
                                <td>Name</td>
                                <td>Ounces(oz)</td>
                                <td>Calories</td>
                                <td>Fats(g)</td>
                                <td>Net carbs(g)</td>
                                <td>Protein(g)</td>
                            </tr>

                            {selectedCat.sources.map(source => {
                                return (
                                    <tr>
                                        <td>{source.name}</td>
                                        <td>{source.ounces}</td>
                                        <td>{source.calories}</td>
                                        <td>{source.fats}</td>
                                        <td>{source.netCarbs}</td>
                                        <td>{source.protein}</td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default SelectedFood