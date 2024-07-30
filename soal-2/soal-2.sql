SELECT
    KodeBarang,
    StokAkhir
FROM
    HistoriStokBarang
WHERE Tanggal = (
    SELECT
        MAX(Tanggal)
    FROM
        HistoriStokBarang AS HSB
    WHERE
        HSB.KodeBarang = HistoriStokBarang.KodeBarang
)
ORDER BY
    KodeBarang;