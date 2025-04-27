// export const ShowCategory = ({ nameC }) => {
//     return <>
//         <h4>category name: ➡️ {nameC}</h4>
//     </>
// }
export const ShowCategory = ({ nameC }) => {
    return (
        <div className="card category-card">
            <h4 className="card-title">Category name: ➡️ {nameC}</h4>
        </div>
    );
}
