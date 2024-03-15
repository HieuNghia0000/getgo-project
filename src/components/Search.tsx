import axios from "axios";
import {Shop} from "./type.ts";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idealParam = searchParams.get('ideal');

    const idealParamFormatted = idealParam ? idealParam.replace(/ /g, '%20') : '';

    const [shopData, setShopData] = useState<Shop[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = "GetGo Travel Companion";
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://a3cce3f7-980e-40b1-bc08-c18d5716c46f-00-3ix7a6f570a3z.sisko.replit.dev/${idealParamFormatted}`);
                console.log(`https://a3cce3f7-980e-40b1-bc08-c18d5716c46f-00-3ix7a6f570a3z.sisko.replit.dev/${idealParamFormatted}`)
                const shop: Shop[] = response.data;
                console.log(shop);
                setShopData(shop);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("Sorry, but no results for you.");
            }
        };

        fetchData();
    }, [idealParamFormatted]);

    const renderShops = () => {
        if (error) {
            return (
                <div className="p-2">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <p>{error}</p>
                    </div>
                </div>
            );
        }

        if (shopData) {
            return (
                <div className="p-2">
                    {shopData.map((shop) => (
                        <div
                            className="mb-6 flex border border-gray-300 rounded p-4"
                        >
                            <img
                                className="mr-4"
                                src={shop.image}
                                alt=""
                                style={{ width: '120px', height: '90px' }}
                            />
                            <div>
                                <p className="text-lg font-semibold">{shop.name}</p>
                                <p className="text-sm text-gray-600">{shop.address}</p>
                                <div className="flex items-center mt-2">
                                    <svg
                                        className="w-4 h-4 text-yellow-500 mr-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M12 2L15.09 8.36L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.36L12 2Z"
                                        />
                                    </svg>
                                    <p className="text-sm text-gray-600">{shop.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="p-2">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <p>
                            Sorry, but no results for you.
                        </p>
                    </div>
                </div>
            );
        }
    };

    return <div>{renderShops()}</div>;
}

export default Search;