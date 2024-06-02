import react, { useEffect, useState } from "react"
import DetailsComponent from "./DetailsComponent"
import { useForm } from "react-hook-form";
import ItensComponent from "./ItensComponent";
import { FormData } from "@/@types/addproduct.type"

const FormComponent = () => {

    const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: string[] }>({});
    const [selectedTags, setSelectedTags] = useState<{ [key: string]: string[] }>({});
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();

    const onSubmit = async (data: FormData | any) => {
        setValue('categories', selectedCategories)
        setValue('tags', selectedTags)

        const transformedData = {
            code: data.code,
            productId: data.id,
            seller: data.seller,
            deliveryDate: new Date(data.deliveryTime).getTime() / 1000,
            specificationsSubtitle: data.subtitle,
            specificationsInfo: data.information,
            specificationsCares: data.care,
            categories: Object.keys(selectedCategories).flatMap(key => selectedCategories[key]),
            tags: Object.keys(selectedTags).flatMap(key => selectedTags[key]),
            id: data.id,
            items: [
                {
                    code: data.codigo,
                    color: data.cor,
                    size: {
                        width: parseFloat(data.tamanho1),
                        height: parseFloat(data.tamanho2),
                        length: parseFloat(data.tamanho3)
                    }
                }
            ]
        };

        try {
            const response = await fetch('https://628bf017667aea3a3e387e51.mockapi.io/create-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transformedData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }

        alert("Produto Criado com Sucesso!")
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <DetailsComponent
                register={register}
                handleSubmit={handleSubmit}
                watch={watch}
                errors={errors}
                onSubmit={onSubmit}
                setSelectedTags={setSelectedTags}
                selectedTags={selectedTags}
                setSelectedCategories={setSelectedCategories}
                selectedCategories={selectedCategories}
            />
            <ItensComponent
                register={register}
                errors={errors}
            />
            <div className="flex justify-end max-w-[1736px]" >
                <button type="submit" className="max-w-[120px] w-full bg-[#D7D7D7] text-[##333333] text-[20px] rounded-[20px] h-[40px] mr-4">Cancelar</button>
                <button type="submit" className="max-w-[120px] w-full bg-[#C0D7E5] text-[#3D464B] text-[20px] h-[40px] rounded-[20px]">Criar</button>
            </div>
        </form>
    )
}

export default FormComponent