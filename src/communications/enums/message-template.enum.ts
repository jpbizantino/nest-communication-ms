/**
 * Twilio template names
OLD                             TEMPLATE NAME		                  NEW TEMPLATE AR	NEW TEMPLATE BR
expired_poe_counter		          expired_poe_counter_ar_v1	        expired_poe_counter_br_v1
expired_poe_counter_v2		      NO HAY	                          expired_poe_counter_br_v1
movement_alert_v2_esp		        movement_alert_v2_esp_ar_v1	      movement_alert_v2_esp_br_v1
organge_alert_poe		            organge_alert_poe_ar_v1	          organge_alert_poe_br_v1
poe_expiration_alert		        poe_expiration_alert_ar_v1	      poe_expiration_alert_br_v1
quality_alert_notification_pt		NO HAY	                          quality_alert_notification_pt_br_v1 
quality_alert_v2		            quality_alert_v2_ar_v1	          NO TIENE - ORIGINAL FUE RECHAZADO
red_alert_poe_2		              red_alert_poe_2_ar_v1	            red_alert_poe_2_br_v1
red_alert_poe_br_v2		          red_alert_poe_br_v2_ar_v1	        red_alert_poe_br_v2_br_v1
red_alert_poe_es_v2		          red_alert_poe_es_v2_ar_v1	        red_alert_poe_es_v2_br_v1
silo_sat_existence_alert		    silo_sat_existence_alert_ar_v1	  silo_sat_existence_alert_br_v1
yellow_alert_poe_1		          yellow_alert_poe_1_ar_v1	        yellow_alert_poe_1_br_v1
yellow_alert_poe_br_v2		      yellow_alert_poe_br_v2_ar_v1	    yellow_alert_poe_br_v2_br_v1
 */

export interface MessageTemplate {
  EXPIRED_POE_COUNTER: string;
  MOVEMENT_ALERT: string;
  ORGANGE_ALERT_POE: string;
  POE_EXPIRATION_ALERT: string;
  QUALITY_ALERT_NOTIFICATION: string;
  RED_ALERT_POE: string;
  SILO_SAT_EXISTENCE_ALERT: string;
  YELLOW_ALERT_POE: string;
}

export class MessageTemplatePT implements MessageTemplate {
  EXPIRED_POE_COUNTER = `¡Olá {{1}}!
A vistoria prevista para {{2}} SilosReais ainda não foram realizadas.`;

  MOVEMENT_ALERT = `Notificação de alerta de movimento na organização: {{1}}, estabelecimento: {{2}}.
Na silobolsa: {{3}} de {{4}}, no lote: {{5}}.
Dispositivo: {{6}}.
Data: {{7}}`;

  ORGANGE_ALERT_POE = `Realize com urgência a vistoria em:
Fazenda: {{1}}
Talhão: {{2}}
Silo: {{3}}
SiloID: {{4}}`;

  POE_EXPIRATION_ALERT = `A vistoria no Silo bolsa {{1}} de {{2}} no talhão {{3}} expirou.
Fazenda: {{4}}, Organização {{5}}.
Data da última vistoria: {{6}}.
É necessário realizar a vistoria do silo para verificar seu estado.`;

  QUALITY_ALERT_NOTIFICATION = `Alerta sobre perda de qualidade devido à ({{1}}) na organização: {{2}}, fazenda: {{3}}.

Esta notificação é referente ao silo bolsa: {{4}} de {{5}}, no talhão: {{6}}.
Dado enviado pelo sensor: {{7}}.
Valor de {{8}}%.`;

  RED_ALERT_POE = `Realize imediatamente a vistoria em:
Fazenda: {{1}}
Talhão: {{2}}
Silo: {{3}} 
SiloID: {{4}}`;

  SILO_SAT_EXISTENCE_ALERT = `🚨 SiloReal não visível em campo

ID: {{1}} não é exibido. Recomenda-se fechar a partir da plataforma.`;

  YELLOW_ALERT_POE: `ALERTA DE VISTORIA: ESTADO DE ATENÇÃO 
Risco identificado em vistoria. Avalie as medidas a serem tomadas em: 
Fazenda: {{1}} 
Talhão: {{2}} 
Silo: {{3}} 
SiloID: {{4}}`;

  getTemplate(name: keyof MessageTemplateAR) {
    return this[name]; // Accessing class property using bracket notation
  }
}

export class MessageTemplateAR implements MessageTemplate {
  EXPIRED_POE_COUNTER = `¡Hola, {{1}}!
La recorrida de {{2}} SiloReales de
tus establecimientos han vencido.`;

  MOVEMENT_ALERT = `Notificación de alerta de movimiento en organización: {{1}}, establecimiento: {{2}}.
En silobolsa: {{3}} de {{4}}, en el lote: {{5}}.
Dispositivo: {{6}}.
Fecha: {{7}}`;

  ORGANGE_ALERT_POE = `Riesgo moderado en silo, realice cuanto antes la recorrida en:
Establecimiento: {{1}}.
Lote: {{2}}.
Silo: {{3}}.
SiloID: {{4}}.`;

  POE_EXPIRATION_ALERT = `Se venció la recorrida en el SB {{1}} de {{2}} del lote {{3}}.
Establecimiento: {{4}}, Organizacion {{5}}.
Fecha ultima recorrida: {{6}}.
Se tiene que realizar la recorrida del silo para conocer su estado.`;

  QUALITY_ALERT_NOTIFICATION = `Notificación de alerta de calidad ({{1}}) en organización: {{2}}, establecimiento: {{3}}.
En silobolsa: {{4}} de {{5}}, en el lote: {{6}}.
Dispositivo: {{7}}.
Valor de {{8}}.`;

  RED_ALERT_POE = `ALERTA DE RECORRIDA: ESTADO CRITICO 
Estado crítico identificado en la recorrida. Tomar medidas urgentes para: 
Establecimiento: {{1}} 
Lote: {{2}} 
Silo: {{3}}
SiloID: {{4}}`;

  SILO_SAT_EXISTENCE_ALERT = `🚨 SiloReal no visible en campo

No se visualiza el ID: {{1}}. Se recomienda cerrar desde desde la plataforma.`;

  YELLOW_ALERT_POE = `LERTA DE RECORRIDA: ESTADO DE PRECAUCION 
Riesgo identificado en la recorrida. Evalúe las medidas a tomar en: 
Establecimiento: {{1}} 
Lote: {{2}} 
Silo: {{3}} 
SiloID: {{4}}`;
}
