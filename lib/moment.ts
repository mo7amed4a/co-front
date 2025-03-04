import moment from "moment";

export const fromNow = (date: string) => {
    return moment(date).fromNow();
}

export const formatDate = (date: string, format?: string) => {
  return moment(date).format(format || "ddd MMM D YYYY, h:mm a")
};