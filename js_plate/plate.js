


/**
 * Расчитываем размер поля по парметрам плитки
 * 
 * @param width ширина пола
 * @param height высота пола
 * @param plateWidth ширнина плитки
 * @param plateHeight высота плитки
 * @param dif расстояние между плитками
 * @return {}
 */
function calckPlateBySize (width, height, plateWidth, plateHeight, dif) 
{
	return {
		cols : Math.ceil (width / (plateWidth + dif)),
		rows : Math.ceil (height / (plateHeight + dif)),
	}
} 

/**
 * Расчитываем коэф зуума что бы один объект влезал в другой
 * 
 * @param int rectWidth, rectHeight что вписываем
 * @param int width, height куда вписываем
 */
function calckZoomKoef (rectWidth, rectHeight, width, height)
{
	var rowKoef = width / rectWidth;
	var colKoef = height / rectHeight;
	
	if (rowKoef < colKoef) return rowKoef;
	return colKoef;
}