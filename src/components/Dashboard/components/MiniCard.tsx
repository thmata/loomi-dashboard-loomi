import React from 'react';

interface MiniCardProps {
    title: string | undefined;
    subtitleText: string | undefined;
    textValue: string | number | undefined;
    monetary?: boolean;
    mensageValue?: string | undefined;
    percentage?: number;
    since?: string;
    subtitleTextColor?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({
    title,
    subtitleText,
    textValue,
    monetary = false,
    mensageValue = "",
    percentage,
    since,
    subtitleTextColor
}) => {
    const tagColor = percentage !== undefined && percentage < 0 ? "text-[#D6628E]" : "text-[#109E8E]";
    const tagSign = percentage !== undefined && percentage > 0 ? "+" : "";
    const tagDisplayValue = percentage !== undefined ? `${tagSign}${percentage}%` : "";
    const colorSubTitleText = subtitleTextColor === "RED" ? "text-[#D6628E]" : "text-[#109E8E]";

    const calculateDaysSince = (since: string): number => {
        const sinceDate = new Date(since);
        const today = new Date();
        const differenceInTime = today.getTime() - sinceDate.getTime();
        return Math.floor(differenceInTime / (1000 * 3600 * 24));
    };

    const daysSince = since ? calculateDaysSince(since) : undefined;

    return (
        <div className="w-[232px] h-[100%] boxShadowCustom bg-white rounded-[15px] pl-4 pt-6 pb-5 flex flex-col justify-between">
            <p className="text-[#4E5D66] text-[16px] font-bold leading-[15px] max-w-[189px] ">{title}</p>
            {percentage !== undefined && (
                <span
                    style={{ boxShadow: "0px 0px 20px #0000001A" }}
                    className="mt-[12px] mb-[10px] w-[55px] h-[23px] flex items-center justify-center rounded-[12px]"
                >
                    <p className={`font-bold text-[12px] ${tagColor}`}>
                        {tagDisplayValue}
                    </p>
                </span>
            )}
            {since !== undefined && (
                <span
                    style={{ boxShadow: "0px 0px 20px #0000001A" }}
                    className="mt-[12px] mb-[10px] w-fit px-[10px] h-[23px] flex items-center justify-center rounded-[12px]"
                >
                    <p className="font-bold text-[12px] text-[#D6628E]">
                        {`há ${daysSince} dias`}
                    </p>
                </span>
            )}
            <p className={`${colorSubTitleText} text-[14px] mb-[18.5px]`}>{subtitleText || " "}</p>
            <span className="text-[#4E5D66] text-[16px] flex items-center">
                {monetary && <p className="mr-[12px]">R$</p>}
                <strong className="font-bold text-[20px]">{textValue}</strong>
                <p className="ml-[13px]">{mensageValue}</p>
            </span>
        </div>
    );
};

export default MiniCard;
