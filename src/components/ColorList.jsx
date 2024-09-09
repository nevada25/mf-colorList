import Swal from "sweetalert2";

export default function ColorList({colorList = []}) {

    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Color: ${color} Copied!`,
            showConfirmButton: false,
            showCancelButton: false,
            confirmButtonText: 'OK',
            timer: 1000,
            timerProgressBar: true,
        })
    }
    return (
        <div className="list-group text-center">
            {
                colorList.length > 0 ?

                    colorList.map((color, index) => (
                        <button key={index}
                                type="button"
                                className="list-group-item list-group-item-action text-white"
                                aria-current="true"
                                title="copiar"
                                style={{
                                    backgroundColor: color,
                                    fontWeight: "bold",
                                }}
                                onClick={() => handleCopyColor(color)}>

                            {color}
                        </button>
                    )) :

                    <div className="alert alert-danger" role="alert">
                        <b>Sin elementos por mostrar</b>
                    </div>
            }
        </div>
    )
}