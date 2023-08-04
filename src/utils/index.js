
export const dateFormat = (date)=>{
    return new Date(date).toLocaleDateString()
}

export const formatNumber = (num) => {
    const units = ["", "K", "M", "B", "T"];
    const unitIndex = Math.floor(Math.log10(num) / 3);
    const unit = units[unitIndex];
    const formattedNumber = (num / Math.pow(1000, unitIndex)).toFixed(1);
  
    return `${formattedNumber}${unit}`;
  };

  export const formatCurrency = (number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(number);
  };