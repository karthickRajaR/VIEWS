package utils;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.annotations.DataProvider;

public class DataProv {
	@DataProvider(name = "fetchData")
	public Object[][] fetchData() throws IOException {
		//return DataLibrary.readExcelData(dataSheetName);
		
		//public static Object[][] readExcelData(String excelfileName) throws IOException {
			XSSFWorkbook wbook = 
					new XSSFWorkbook("./data/login.xlsx");
			XSSFSheet sheet = wbook.getSheetAt(0);
			int rowCount = sheet.getLastRowNum();
			int colCount = sheet.getRow(0).getLastCellNum();
	}	
	

}}
