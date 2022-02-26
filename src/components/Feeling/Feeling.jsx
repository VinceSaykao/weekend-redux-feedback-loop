


export default function Feeling() {

    function getFeeling() {
        console.log('Getting....Feels...');
        axios({
            method: 'GET',
            url: '/api/feedback',
        })
            .then((response) => {
                console.log(respose.data)

                dispatchEvent({
                    type: 'GET_FEELING',
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log('error', error);
            })

    }

    return (
        <>


            <p>Hello</p>


        </>
    )

}