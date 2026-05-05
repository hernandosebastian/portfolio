Título: ZenCost
Descripción corta:
Plataforma SaaS de FinOps que simplifica la administración financiera de AWS y Snowflake para empresas enterprise.
Equipo: Confidencial
Rol: Desarrollador Full Stack Semi Senior
Año — Duración: 2024 · 11 meses
¿Por qué este proyecto?
Las organizaciones que operan en AWS pierden entre 20-30% de su gasto en recursos ociosos, mal dimensionados o sin visibilidad entre múltiples cuentas. El cliente necesitaba una solución que unificara el control financiero y operativo de la nube sin comprometer la seguridad ni introducir fricción en el onboarding.
Solución:
Plataforma multi-cuenta que unifica visibilidad de EC2, RDS, Redshift, EKS y Snowflake en una sola interfaz. Integración agentless via roles IAM, scheduling automático de recursos, motor de optimización con hallazgos de seguridad y billing, sistema de tagging, exportación de reportes PDF y suite de 6 informes operativos.
Impacto:
Usado por bancos, aseguradoras y empresas de salud en Latinoamérica. ROI recuperable desde el primer mes mediante automatización de recursos y eliminación de gasto innecesario.
Desafíos principales:
Garantizar seguridad enterprise sin fricción — el modelo agentless con CloudFormation StackSets permite desplegar en organizaciones multi-cuenta en minutos sin instalar nada en las instancias del cliente.
Tecnologías:
Frontend

React, Next.js, TypeScript
Tailwind CSS

Backend

Python, boto3
Node.js

Infraestructura y Cloud

AWS EC2, RDS, Redshift, EKS
AWS Cost Explorer, Organizations, CUR
AWS Security Hub, CloudTrail, CloudFormation, StackSets
AWS S3, Lambda, IAM
Snowflake, Databricks

Herramientas

GitHub, CI/CD Pipelines