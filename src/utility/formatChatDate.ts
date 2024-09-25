import {differenceInHours, differenceInMinutes, format, isSameYear} from "date-fns";
/*
    returns formatted date string depending on difference between now and date given
    1. mins/hours ago if less than 24 hours ago
    2. EEE, MMM d h:mm a if more than 24 hours ago but in same year
    3. EEE, MMM d yyyy h:mm a include year if in a different year
 */
export const formatChatDate = (unformattedDateString: string | undefined | null) => {
    if(!unformattedDateString){
        return '';
    }

    const date = new Date(unformattedDateString);
    const now = new Date();

    const minutesAgo = differenceInMinutes(now, date);
    const hoursAgo = differenceInHours(now, date);

    if(minutesAgo === 0){
        return 'Just now';
    } else if (minutesAgo < 60 && minutesAgo > 0) {
        return `${minutesAgo} mins ago`;
    } else if (hoursAgo < 24 && hoursAgo >= 0) {
        return `${hoursAgo} hours ago`;
    } else {
        let formatString = 'EEE, MMM d h:mm a';
        if (!isSameYear(date, now)) {
            formatString = 'EEE, MMM d yyyy h:mm a';
        }
        return format(date, formatString);
    }
};
