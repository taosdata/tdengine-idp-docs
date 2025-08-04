---
title: Units of Measurement
---

In IoT and industrial scenarios, each data point collected may use different units of measurement (UoM). Even if unit conversion is performed during ingestion, due to variations in project timelines and other factors, inconsistencies in units may still exist in the stored data. Unit conversion is essential to ensure accurate data analysis.

Because modifying already stored data is not advisable, TDengine IDMP allows you to configure both a storage unit and a display unit for each attribute of an element. Whether for expression-based calculations or for simple display purposes, TDengine IDMP will automatically perform unit conversions based on the storage unit of the data.

TDengine IDMP comes with a wide range of built-in units, but you can also extend the list as needed.

UoM is available under **Libraries** in the main menu.
