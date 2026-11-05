function CartWidget() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#17192D] transition hover:bg-[#222438]">
      <span className="text-2xl">🛒</span>

      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#D97F30] text-sm font-bold text-white">
        0
      </span>
    </div>
  );
}

export default CartWidget;
