import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export const allIcons: any = {
    ...FaIcons,
    ...SiIcons,
};

export const onFormatSkillInfo = (skillInfo: any[]) => {
    if (!skillInfo?.length) return [];

    return skillInfo.flatMap((skill: any) => [
        skill?.text,
        skill?.duration,
    ]);
};

export const onGetIconInfo = (iconInfo: any) => {
    if (iconInfo) {
        const Icon: any = allIcons[iconInfo?.icon];

        return Icon ?
            <Icon
                title={iconInfo?.title}
            />
            : null;
    }
};
