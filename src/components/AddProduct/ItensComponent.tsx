import Image from "next/image"
import { UseFormRegister, FieldErrors } from 'react-hook-form';


interface ItensComponentProps {
    register: UseFormRegister<any>;
    errors: FieldErrors;
}

const ItensComponent: React.FC<ItensComponentProps> = ({ register, errors }) => {

    return (
        <div className="p-[40px] boxShadowCustom bg-white mt-[40px] rounded-[20px] max-w-[1736px]">
            <div className="flex justify-between">
                <h3 className="text-[20px] text-[#333333]" >Itens</h3>
                <button className="flex items-center">
                    <Image className="mr-[10px]" src={"/img/plus.png"} alt="more" width={13} height={13} />
                    <p className="text-[#333333] text-[18px] font-medium">Adicionar</p>
                </button>
            </div>

            <div className="flex items-center mt-[37px]">
                <span className="mr-2">Item 01</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex mt-[36px]">
                <div className="space-y-4 mr-[60px]">
                    <div className="flex items-center">
                        <label className="max-w-[73px] w-full mr-[53px] text-[#4E5D66]">Código:</label>
                        <input
                            {...register('codigo', { required: true })}
                            className="w-full rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]"
                        />
                        {errors.codigo && <span className="text-red-500 ml-2">Obrigatório</span>}
                    </div>
                    <div className="flex items-center">
                        <label className="max-w-[73px] w-full mr-[53px] text-[#4E5D66]">Cor:</label>
                        <input
                            {...register('cor', { required: true })}
                            className="w-full rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]"
                        />
                        {errors.cor && <span className="text-red-500 ml-2">Obrigatório</span>}
                    </div>
                    <div className="flex items-center">
                        <label className="max-w-[73px] w-full mr-[53px] text-[#4E5D66]">Tamanho:</label>
                        <div className="max-w-[314px] w-full flex space-x-2">
                            <input
                                {...register('tamanho1', { required: true })}
                                className="w-full rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]"
                            />
                            <span className="text-[#4E5D66] whitespace-nowrap flex items-center">m x</span>
                            <input
                                {...register('tamanho2', { required: true })}
                                className="w-full rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]"
                            />
                            <span className="text-[#4E5D66] whitespace-nowrap flex items-center">m x</span>
                            <input
                                {...register('tamanho3', { required: true })}
                                className="w-full rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]"
                            />
                            <span className="text-[#4E5D66] whitespace-nowrap flex items-center">m </span>
                        </div>
                        {(errors.tamanho1 || errors.tamanho2 || errors.tamanho3) && (
                            <span className="text-red-500 ml-2">Obrigatório</span>
                        )}
                    </div>
                </div>
                <div className="flex ">
                    <label className="text-[#4E5D66] mb-2 mr-[60px]">Imagens:</label>
                    <div className="w-[100px] h-[100px] bg-[#D4E1EB] flex items-center justify-center cursor-pointer">
                        <span className="text-2xl text-[#C0D7E5]"><Image src={"/img/plus.png"} alt="more" width={16} height={16} /></span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ItensComponent
