import Team from "../../components/landingPages/team"

const TeamContainer = () => {
    return (
        <div id='team' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className='text-center mb-5'>Team dibalik Saveurior</h1>
            <Team
                image="images/WhatsApp Image 2023-11-02 at 14.00.10.jpeg"
                name="Ilma Ilhami Budiman"
            />
            <Team
                image="images/WhatsApp Image 2023-11-02 at 13.58.06.jpeg"
                name="Mohammad Nurafiq Mawadin"
            />
            <Team
                image="images/WhatsApp Image 2023-11-02 at 13.58.06 (1).jpeg"
                name="Siti Tamti Salamah"
            />
            <Team
                image="images/WhatsApp Image 2023-11-02 at 13.58.05.jpeg"
                name="Risma Herlindayani"
            />
        </div>
    )
}

export default TeamContainer