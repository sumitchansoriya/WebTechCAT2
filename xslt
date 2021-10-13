<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>Registered Students</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Name</th>
        <th>College</th>
      </tr>
      <tr>
        <td><xsl:value-of select="CHRIST/CS/STU-NAME"/></td>
        <td><xsl:value-of select="CHRIST/CS/STU-COLLEGE"/></td>
      </tr>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>