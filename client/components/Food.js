import React from "react"

const Food = ({ categories }) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {categories.map(category => {
                        return (
                            <>
                                <div className="col-lg-3 mb-4">
                                    <div className="card">

                                        <img className="card-img-top" src={category.picUrl} />
                                        <div className="card-body">
                                            <h5 className="card-title">{category.name}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corrupti quam magnam!
                                            Veniam, dolorum facere?
                    Commodi, ut. Et, itaque quam!</p>
                                            <a href={`#${category.id}`} ><button className="btn btn-outline-success btn-sm">View All</button></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}


                </div>
            </div>
        </section>

    )
}

export default Food