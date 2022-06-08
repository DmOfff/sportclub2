import Breadcrumb from "flowbite-react/lib/esm/components/Breadcrumb";

const Profile = () => {

    return <>
        <Breadcrumb
            className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
        >
            <Breadcrumb.Item href="/" >
                Главная
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" >
                Projects
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Flowbite React
            </Breadcrumb.Item>
        </Breadcrumb>
    </>

}