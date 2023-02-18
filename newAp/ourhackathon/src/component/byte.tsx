interface byteProps {title:string, body:string, user:string, img:string};

export function Byte({title, body, user, img}:byteProps){

    return (
    <tr>
        <td scope="row" className="text-nowrap">

            <img className="" src={img} width="50px" height="50px"/>
            <p className="text-center">{title}</p>
        </td>
        <td className="text-start">
            <a href="#" className="font-weight-bold blue-text">
                {body} </a>
            <div className="my-2">
                <a href="#" className="blue-text">
                    <strong>{user}</strong>
                </a>
                <span className="badge bg-secondary mx-1">staff</span><span
                className="badge bg-primary mx-1">pro</span><span className="badge bg-warning mx-1">premium</span>
                <span>a year ago</span>
            </div>
            <div></div>
        </td>
        <td>
            <a href="#" className="text-dark">
                <span>0</span>
                <i className="fas fa-comments ml-1"></i>
            </a>
        </td>
    </tr>
    );
}